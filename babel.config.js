module.exports = {
    "presets": [
        "next/babel"
    ],
    "plugins": [
        [
            "module-resolver",
            {
                "root": [
                    "."
                ],
                "extensions": [
                    ".js",
                    ".ts",
                    ".tsx"
                ]
            }
        ]
    ]
}