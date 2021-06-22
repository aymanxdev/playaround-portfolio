export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60d22c4ed17c6600a439b0b0',
                  title: 'Sanity Studio',
                  name: 'playaround-portfolio-studio',
                  apiId: 'd61ff3e2-6d7d-42dc-a63c-93f1a4453088'
                },
                {
                  buildHookId: '60d22c4e8dc04300b838f9d3',
                  title: 'Portfolio Website',
                  name: 'playaround-portfolio',
                  apiId: 'd143b585-38eb-4aa8-8816-cc6c18e5c088'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aymanxdev/playaround-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://playaround-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
