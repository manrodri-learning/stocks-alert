module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverageFrom: ['src/**/*.ts', '!src/fixtures/index.ts'],
    coverageDirectory: 'reports/coverage/unit',
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
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