module.exports = {
    extends: [
        "airbnb",
        "airbnb/hooks",
        "airbnb-typescript",
        "prettier",
    ],
    plugins: ["prettier"],
    parserOptions: {
        project: "./tsconfig.json",
    },
    rules: {
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
            },
        ],
        "react/require-default-props": [2, { functions: "defaultArguments" }],
    },
};
