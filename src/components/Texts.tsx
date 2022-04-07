import { styled } from "../stitches.config";

export const Texts = styled('h1', {
    fontFamily: "$mono",
    color: "$darkText",

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
            }
        }
    }
})