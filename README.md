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
