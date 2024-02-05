module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverageFrom: ['src/**/*.ts', '!src/fixtures/index.ts'],
    coverageDirectory: 'reports/coverage/unit',
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: '<rootDir>/reports/tests',
                outputName: 'unit-test-evidence.xml',
            },
        ],
        [
            'jest-html-reporter',
            {
                outputPath: '<rootDir>/reports/cucumber/requirements-evidence.html',
            },
        ],
    ],
};