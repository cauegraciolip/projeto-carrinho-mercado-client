import { styled } from "../stitches.config";

export const Button = styled('button', {
    appearance: "none",
    fontFamily: "$mono",
    fontSize: "$2",
    fontWeight: "$3",
    border: "none",
    paddingX: "$2",
    paddingY: "$1",
    transition: "$1",
    boxSizing: 'border-box',
    letterSpacing: "$1",

    '&:hover': {
        cursor: "pointer",
    },

    variants: {
        variant: {
            cancel: {
                backgroundColor: "$tomato10",
                color: "$tomato2",
                '&:hover': {
                    backgroundColor: "$tomato11"
                }
            },
            success: {
                backgroundColor: "$green10",
                color: "$mauve1",
                '&:hover': {
                    backgroundColor: "$green11"
                }
            },
            pattern: {
                backgroundColor: "$blue10",
                color: "$mauve2",
                '&:hover': {
                    backgroundColor: "$blue11"
                }
            },
            disabled: {
                backgroundColor: "$mauve2",
                color: "$mauve9",
                '&:hover': {
                    backgroundColor: "$mauve2"
                }
            },
            gray: {
                backgroundColor: "$slate2",
                color: "$mauve12",
                '&:hover': {
                    backgroundColor: "$slate4"
                }
            }
        }, 
        outlined: {
            true: {
                backgroundColor: "transparent",
                border: "1px solid",
            }
        },
        size: {
            normal: {
                width: "$3",
                height: "40px",
                br: "$2"
            },
            big: {
                width: "100%",
                height: "40px",
                br: "$2"
            }
        }
    },

    compoundVariants: [
        {
            variant: "cancel",
            outlined: true,
            css: {
                borderColor: "$tomato10",
                color: "$tomato10",
                '&:hover': {
                    color: "$mauve1"
                }
            }
        },
        {
            variant: "success",
            outlined: true,
            css: {
                borderColor: "$green10",
                color: "$green10",
                '&:hover': {
                    color: "$mauve1"
                }
            }
        },
        {
            variant: "pattern",
            outlined: true,
            css: {
                borderColor: "$blue10",
                color: "$blue10",
                '&:hover': {
                    color: "$mauve1"
                }
            }
        },
    ],

    defaultVariants: {
        variant: "gray",
        size: "normal",
    }
    
})