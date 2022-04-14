import { styled } from "../stitches.config";

export const Texts = styled('h1', {

    variants: {
        fonte: {
            logo: {
                fontSize: "$8"
            },
            principal: {
                fontSize: "$7"
            },
            title: {
                fontSize: "$6"
            },
            subtitle: {
                fontSize: "$5"
            },
            label: {
                fontSize: "$4"
            },
            paragraph: {
                fontSize: "$3"
            },
            icon: {
                fontSize: "$2"
            },
            text: {
                fontSize: "$1"
            }
        },
        color: {
            dark: {
                color: "$darkText"
            },
            light: {
                color: "$textColor"
            }
        },
        link: {
            true: {
                "&:hover": {
                    color: "$blue11",
                    cursor: "pointer",
                    transition: "$1"
                }
            }
        }
    }
})