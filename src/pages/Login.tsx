import { css, styled } from "../stitches.config";

import { Texts } from "../components/Texts";
import { Input } from "../components/Input/Input";
import { InputControl } from "../components/Input/InputControl";
import { Button } from "../components/Button";

import { FaUserAlt, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import {Helmet} from "react-helmet";

const container = css({
    width: "100vw",
    height: "100vh",
    display: "flex",

    variants: {
        variant: {
            left: {
                width: "40%",
                height: "100%",
                display: "flex",
                backgroundColor: "#4D4D4D",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                backgroundImage: 'url(src/assets/images/login_image3.jpg)',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundBlendMode: "exclusion",

                '@ort':{
                    display: "none"
                },

                '@bp3': {
                    display: "none"
                }

            },
            right: {
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: "60%",
                height: "100%",
                backgroundColor: "#F2F2F2",

                '@ort': {
                    width: "100%",
                    height: "100vh"
                },

                '@bp3':{
                    width: "100%",
                    height: "100vh"
                },
            },
            rightControl: {
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: "80%",
                height: "100%",
                backgroundColor: "#F2F2F2",
                gap: "15px"
            },
        }
    }
})

const Image = styled('img', {
    width: 200,
    height: 200
})

const GoogleButton = styled('button', {
    width: "70%",
    border: "1px solid white",
    br: "$1",
    boxShadow: "0px 5px 10px -1px rgba(77,77,77,0.2)",
    backgroundColor: "white",
    padding: "0.5em 1em",
    fontSize: "$1",
    color: "$darkText",
    alignItems: "center",
    transition: "$1",
    display: "flex",
    gap: 10,
    justifyContent: "center",

    "&:hover": {
        cursor: "pointer",
        // transform: "scale(1.01)",
        border: "1px solid rgba(77,77,77,0.2)",
        transition: "$1",
    }
})

const createForgot = css({
    width: "100%",
    display: "flex",
    justifyContent:"space-between"
})

export const Login = () => {
    return (
        <main className={container()}>
            <Helmet>
                <title>Easy Market - Um novo jeito de controlar suas compras</title>
                <link rel="shortcut icon" href="src/assets/images/shopping-cart-solid.svg"/>
            </Helmet>
            <h1 style={{display: "none"}}>Ease Market - o melhor lugar para controlar suas compras de mercado</h1>
            <section className={container({variant: "left"})}>
                <Texts style={{width: "90%"}} color="light" fonte="subtitle">Descubra a melhor forma de controlar suas contas de mercado.</Texts>
            </section>
            <section className={container({variant: "right"})}>
                <div className={container({variant: "rightControl"})}>
                    <Image src="src/assets/images/easy-market-logo 1.png" alt="app logo" />
                    <GoogleButton><FcGoogle style={{fontSize: "1.5em"}} /> Entre com sua conta Google</GoogleButton>
                    <Texts as="label" fonte="icon" color="dark">Ou entre usando seu usuário ou e-mail</Texts>
                    <InputControl>
                        <FaUserAlt />
                        <Input placeholder="E-mail ou usuário"/>
                    </InputControl>
                    <InputControl>
                        <FaLock />
                        <Input type="password" placeholder="Senha"/>
                    </InputControl>
                    <Button variant="success" size="big">ENTRAR</Button>
                    <div className={createForgot()}>
                        <Texts as="a" fonte="text" color="dark" link>Crie uma conta</Texts>
                        <Texts as="a" fonte="text" color="dark" link>Esqueceu a senha?</Texts>
                    </div>
                </div>
            </section>
        </main>
    )
}