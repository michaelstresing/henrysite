 
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const fs = require('fs');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNode, createParentChildLink } = boundActionCreators;

  if (node.internal.mediaType === `application/pdf`) {
    const path = createFilePath({ node, getNode, basePath: `content` });
    const metadata = {};
    const pdfPath = node.absolutePath;

    pdfExtract.extract(
      pdfPath,
      {} /* options, currently nothing available*/,
      function(err, data) {
        if (err) {
          return console.log(err);
        }

        if (data.meta.info) {
          const downloadPath = pdfPath.match(
            /(.*)\/src\/content\/writing\/(.*)/
          )[2];
          const fallbackName = downloadPath.replace(/\.pdf$/, '');

          metadata.downloadPath = `../../pdf/${downloadPath}`;
          metadata.title = data.meta.info.Title || fallbackName;
          metadata.author = data.meta.info.Author || 'Unknown';
          metadata.pageCount = (data.pdfInfo.numPages || 0).toString();
          metadata.fingerprint =
            data.pdfInfo.fingerprint || Math.random().toString();
        }

        const bookNode = {
          ...metadata,
          path: path.replace(/\s|\(|\)|\[|\]\<|>/g, '-'),
          id: `${node.id} [${metadata.fingerprint}] >>> ${node.extension}`,
          children: [],
          parent: node.id,
          internal: {
            contentDigest: data.pdfInfo.fingerprint,
            type: 'book'
          }
        };

        createNode(bookNode);
        createParentChildLink({ parent: node, child: bookNode });
      }
    );
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const viewBook = path.resolve('./src/templates/view-book.js');
    resolve(
      graphql(
        `
          {
            allBook(limit: 1000) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        result.data.allBook.edges.forEach(edge => {
          createPage({
            path: edge.node.path,
            component: viewBook,
            context: {
              path: edge.node.path
            }
          });
        });
      })
    );
  });
};

// __________________

//-NOTE TO SELF: MDX Supports React Components inside of markdown, so best to leave these as MDX as we had, and create the React-PDF veiwer inside of it where needed.

// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   const writingTemplate = path.resolve(`./src/templates/writing-post.js`)
//   const workTemplate = path.resolve(`./src/templates/work-post.js`)

// 	// PDFs for Writing + Works Together
// 	return graphql(`
// 		{
// 			writings: allMarkdownRemark(
// 				filter: { fileAbsolutePath: { glob: "**/src/content/writing/*.md" } }
// 				sort: { order: DESC, fields: frontmatter___date }
// 			) {
// 				edges {
// 					node {
// 						fields {
// 							slug
// 						}
// 					}
// 				}
// 			}
// 			writingsPDFs: allFile(
// 				filter: {
// 					absolutePath: { glob: "**/src/content/writingPDFs/*.pdf" }
// 				}
// 				sort: { order: DESC, fields: frontmatter___order }
// 			) {
// 				edges {
// 					node {
// 						fields {
// 							slug
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog posts pages.
//     const posts = result.data.allMdx.edges

//     posts.forEach((post, index) => {
//       const previous = index === posts.length - 1 ? null : posts[index + 1].node
//       const next = index === 0 ? null : posts[index - 1].node

//       createPage({
//         path: `blog${post.node.fields.slug}`,
//         component: writingTemplate,
//         context: {
//           slug: post.node.fields.slug,
//           previous,
//           next,
//         },
//       })
//     })

//     return null
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `Mdx`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }