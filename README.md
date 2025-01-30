# Weather Forecast App
A simple weather forecast app that uses the YR's API's to display weather data for a given location, and Nominatim's API to get the location's coordinates.

## Local setup
The repository uses `pnpm` as package manager, a `package-lock.json` file is provided for `npm` users.

### Install dependencies
```bash
pnpm install
```

### Start the app
```bash
pnpm dev
```

### Run tests
```bash
pnpm test // Runs all tests
pnpm test:watch // Runs tests in watch mode
```

### Build the app
```bash
pnpm build
pnpm serve // Serve the built app
```

## Approach and structure
I approached this case with the goal of delivering a realistic app mimicking a real-world project, given the time constraints.



### Things I'd do differently in a real-world project
#### Routing
Given the time constraint, and what I wanted to accomplished, I decided to go with a super-simple routing solution based on reading the URL. In a real-world project,
I'd use a routing library like `react-router` or `wouter` to handle routing, or consider using a meta-framework if the project calls for it.

#### Types
I would spend some time investing into auto-generating types for the API responses using their OpenAPI/Swagger definitions, instead of writing them by hand.
This saves time in the long run, especially as the app grows, and the API changes.

#### The `Location` type
I'd love for the type to have an `id`-property, which would make it easier to handle the locations in the app, as well as making our routing way more elegant than using query params.

#### The condition symbols
The symbols are hosted on `https://nrkno.github.io/`, and the path to each symbol is their ID. This URL can change, or YR might decide to change the way the symbols are identified.
In a real-world project, I'd consider downloading the symbols using a CDN to host them, removing the external dependency and regaining control over the assets.

### Stack
-   **React with Typescript**: UI
-   **Vite**: Build tool
-   **TailwindCSS**: Styling, productive way to write styles, and don't have to worry about the scoping or leftovers. The drawback is that it can be harder to read the DOM, but given the small size of the app, it's not a big issue.
-   **Vitest and React Testing Library**: Testing
-   **Tanstack/React Query**: Data fetching and caching. It's a powerful tool that provides a lot of features out of the box, like caching, loading and error states, and more. It is however a bit harder when unit testing, and the learning curve can be a bit steep.

### Folder structure
The app is structured in a way that each feature owns its own components and queries. This makes it easier to maintain and scale the app, compared to a huge `components` folder with all components in it.

```
└── src/
    ├── common/     < - Utils and hooks used across different features
    ├── components/ < - Global components
    ├── model/      < - Typescript types
    └── routes/
        └── {routename}/
            ├── components/ < - Components only relevant to a specific route
            └── queries.ts  < - Queries only relevant to a specific route
```
