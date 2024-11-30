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
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": [2, { functions: "defaultArguments" }],
        "import/prefer-default-export": "off",
    },
};
