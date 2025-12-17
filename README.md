# UK Energy Mix Analyzer - Client

A React + TypeScript web application for visualizing the UK's current and forecasted energy mix, with intelligent EV charging window optimization based on clean energy availability.

## Features

### Energy Mix Visualization

-   **Three Interactive Pie Charts**: Display energy mix data for today, tomorrow, and the day after
-   **Source Breakdown**: Visual representation of different energy sources (renewable, fossil fuels, nuclear, etc.)
-   **Clean Energy Percentage**: Prominent display of clean energy share for each day
-   **Real-time Data**: Fetches current and forecasted energy data from external API

### EV Charging Optimizer

-   **Flexible Time Input**: Users can specify charging duration from 1 to 6 hours
-   **Detailed Results Display**:
    -   Start date and time
    -   End date and time
    -   Average clean energy percentage during the charging window

## Tech Stack

-   **React**
-   **TypeScript**
-   **Vite**
-   **Tailwind CSS**
-   **Material-UI**
-   **Jest**

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd energy-consumption-and-charging-app-client
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Testing

Run tests:

```bash
npm run test
```

## Linting

Run ESLint:

```bash
npm run lint
```

## Project Structure

```
energy-consumption-and-charging-app-client/
├── dist/                           # Build output
├── node_modules/
├── public/                         # Static assets
├── src/
│   ├── components/                 # Reusable components
│   ├── hooks/                      # Custom React hooks
│   ├── MonitoringPanel/           # Main monitoring panel
│   │   ├── Sections/
│   │   │   ├── EnergyPieChart/    # Energy mix pie charts
│   │   │   └── OptimalChargingTime/ # Charging optimizer
│   │   └── MonitoringPanel.tsx
│   ├── App.tsx                    # Root component
│   ├── consts.ts                  # Constants and configuration
│   ├── index.css                  # Global styles
│   └── main.tsx                   # Application entry point
├── .env                           # Environment variables
├── .gitignore
├── eslint.config.js              # ESLint configuration
├── index.html                     # HTML template
├── jest.config.ts                 # Jest configuration
├── package.json
├── package-lock.json
├── README.md
├── setupTests.ts                  # Test setup
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.jest.json             # TypeScript config for Jest
└── vite.config.ts                 # Vite configuration
```

## Key Components

### MonitoringPanel

Main container component that orchestrates the application:

-   Manages application state
-   Coordinates data fetching
-   Contains the two main sections

### EnergyPieChart

Renders pie charts showing energy source distribution:

-   Three charts for today, tomorrow, and day after tomorrow
-   Displays clean energy percentage for each day
-   Color-coded energy sources with legends
-   Uses Material-UI chart components

### OptimalChargingTime

Handles EV charging optimization:

-   Time duration input slider/input (1-6 hours)
-   Submits requests to backend API
-   Displays optimal charging window results:
    -   Start date and time
    -   End date and time
    -   Average clean energy percentage

## API Integration

The client communicates with the backend API:

**GET `/generation-mix-for-three-next-days`**

-   Fetches current and forecasted energy mix data for 3 days
-   Returns data structure with energy sources and percentages

**GET `/optimal-charging-window-time?hours={some value}`**

-   Request (1-6 hours)
-   Returns optimal charging window

## Type Safety

The project uses TypeScript for type safety. Key types are defined in:

-   Component prop types
-   API response interfaces
-   State management types
-   Utility function types

## Styling

The application uses:

-   **Tailwind CSS** for utility-based styling
-   **Material-UI** for chart components and themed elements
-   **Custom CSS** in `index.css` for global styles

## Environment Variables

| Variable       | Description          | Default                           |
| -------------- | -------------------- | --------------------------------- |
| `VITE_API_URL` | Backend API base URL | `http://localhost:3000/{api-url}` |

## Configuration Files

-   **vite.config.ts** - Vite bundler configuration
-   **tsconfig.json** - TypeScript compiler options
-   **eslint.config.js** - Code linting rules
-   **jest.config.ts** - Testing framework setup
-   **tailwind.config.js** - Tailwind CSS customization (if exists)

## Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## Development Workflow

1. Create feature branch from `main`
2. Implement changes with TypeScript
3. Ensure tests pass (`npm run test`)
4. Run linter (`npm run lint`)
5. Build locally to verify (`npm run build`)
6. Submit pull request

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please open an issue in the GitHub repository.
