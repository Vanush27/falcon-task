const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 290,
            width: 190
        }
    },
    getContentAnchorEl: null,
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "center"
    },
    variant: "menu"
};

const options = [
    "English",
    "German",
    "Chinese",
    "Italian",
];

const topRated = [
    "Top Rated",
    "Latest",
    "Most Read",
    "Popular",
];

export {MenuProps, options, topRated};
