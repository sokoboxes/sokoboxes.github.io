exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
    const config = getConfig();

    config.module.rules.forEach(rule => {
        if (rule.use && Array.isArray(rule.use)) {
            rule.use.forEach(item => {
                if (
                    item.loader &&
                    item.loader.includes("url-loader") &&
                    item.options.limit
                ) {
                    // disable base64 inline
                    item.options.limit = 0;
                }
            });
        }
    });

    actions.replaceWebpackConfig(config);
};