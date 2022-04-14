import { createStitches } from "@stitches/react";
import { slate, yellow, amber, lime, green, mauve, tomato, blue, grass  } from "@radix-ui/colors";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
  } = createStitches({
    theme: {
        colors: {
            bgColor: "#EAEAEA",
            textColor: "#F6F6F6",
            darkText: "#303030",
            red: "#FF003C",
            label: "#4D4D4D",
            ...tomato,
            ...blue,
            ...grass,
            ...green,
            ...lime,
            ...yellow,
            ...amber,
            ...mauve,
            ...slate
        },
        fontSizes: {
            1: "clamp(1em, 1em + 1vw, 1.2em)",
            2: "clamp(1.2em, 1.2em + 1vw, 1.4em)",
            3: "clamp(1.4em, 1.4em + 1vw, 1.6em)",
            4: "clamp(1.6em, 1.6em + 1vw, 1.8em)",
            5: "clamp(1.8em, 1.8em + 1vw, 2.2em)",
            6: "clamp(2.2em, 2.2em + 1vw, 2.4em)",
            7: "clamp(2.4em, 2.4em + 1vw, 2.8em)",
            8: "clamp(2.8em, 2.8em + 1vw, 3.2em)",
        },
        space: {
            1: "5px",
            2: "10px",
            3: "15px",
            4: "20px",
            5: "25px",
            6: "30px"
        },
        fontWeights: {
            1: "300",
            2: "400",
            3: "700"
        },
        letterSpacings: {
          1: "1px",
          2: "2px",
          3: "3px"  
        },
        sizes: {
            1: "100px",
            2: "120px",
            3: "150px",
        },
        radii: {
            1: "4px",
            2: "6px",
            3: "8px",
            4: "9999px"
        },
        transitions: {
            1: "all 0.2s ease",
        }
    },
    media: {
        bp1: "(max-width: 425px)",
        bp2: "(max-width: 768px)",
        bp3: "(max-width: 1024px)",
        bp4: "(max-width: 1336px)",
        ort: "(orientation: portrait)"
    },
    utils: {
        marginX: (value: string) => ({marginLeft: value, marginRight: value}),
        paddingX: (value: string) => ({paddingLeft: value, paddingRight: value}),
        paddingY: (value: string) => ({paddingTop: value, paddingBottom: value}),
        br: (value: string) => ({borderRadius: value}),
        shadow: (value: string) => ({boxShadow: `0px 10px 40px -12px ${value}`})
    }
  })
