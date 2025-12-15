import type { Config } from 'jest';

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	roots: ['<rootDir>/src'],

	testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],

	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],

	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				tsconfig: 'tsconfig.jest.json',
			},
		],
	},

	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',

		'\\.(jpg|jpeg|png|gif|svg|webp)$': '<rootDir>/__mocks__/fileMock.ts',

		'^@/(.*)$': '<rootDir>/src/$1',
	},

	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

	testPathIgnorePatterns: ['/node_modules/', '/dist/'],

	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/**/*.d.ts',
		'!src/main.tsx',
		'!src/vite-env.d.ts',
		'!src/**/*.stories.tsx',
	],

	coverageThreshold: {
		global: {
			branches: 70,
			functions: 70,
			lines: 70,
			statements: 70,
		},
	},

	testTimeout: 10000,
};

export default config;
