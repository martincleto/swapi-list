# SWAPI List

An app to browse Star Wars characters build by using React + Apollo Client.
### Available Scripts

In the project directory, you can run:

`npm start`
Launches the app in http://localhost:3000 (or an alternative port if occupied)

`npm run build`
Creates a production build

`npm test`
Runs the unit tests

### Technical notes

- **Tech stack:** React and its companion testing tools (Jest + Testing Library) were chosen because I have experience with them and I would develop the app in a faster pace. On the opposite, I have not worked so much with GraphQL but I tried Apollo Client for a former project successfully so I decided to use it again.
- I have build a **MVP** in the most straighforward way without excluding best practices on coding and implementing most of the requested features whitin the recommended time. There is not a sofisticated architecture due to the simplicity of the app (e.g. no domain layer nor use cases) but I have splitted the responsibilities into two logical layers: **infrastructure** (where data fetching definition and services live) and **UI**.
- The **development process** can be inferred from the [commit history](https://github.com/martincleto/swapi-list/commits/main).

### Next iterations

- Implement *order by name* filter: By extending the current [useFilter hook](https://github.com/martincleto/swapi-list/blob/main/src/ui/hooks/useFilters/useFilters.test.ts) with a new use case `order`. A subsequent *util/orderBy* utility should be also developed for this feature.
- Add e2e/integration tests for the views: As I wasn't be able to make [Apollo MockedProvider](https://www.apollographql.com/docs/react/development-testing/testing#the-mockedprovider-component) work properly I'll likely mock request by an aux tool such as [jest-mock](https://www.npmjs.com/package/jest-mock) for integration tests and [Cypress](https://www.cypress.io/) for e2e.
- Fix layout for some specific screen width: The layout slightly breaks when resizing the browser window around 830px - it's a visual issue without functionality side-effect.