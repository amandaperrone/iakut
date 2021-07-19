import React from 'react';
import { useRouter } from 'next/router';

import nookies from 'nookies';

import logo from '../src/lib/iakutlogo.svg';


export default function LoginScreen() {
    const router = useRouter();

    const [user, setUser] = React.useState('');

    return (
        <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <div className="loginScreen">
                <section className="logoArea">
                    <img src={logo.src} />

                    <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
                    <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
                    <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
                </section>

                <section className="formArea">
                    <form className="box" onSubmit={(event) => {
                        event.preventDefault();
                        fetch('https://alurakut.vercel.app/api/login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                githubUser: user,
                            })
                        }).then(async (res) => {
                            const resposta = await res.json();
                            const token = resposta.token;
                            nookies.set(null, 'USER_TOKEN', token, {
                                path: '/',
                                maxAge: 86400 * 7
                            });
                            router.push('/');
                        })
                    }}>
                        <p>
                            Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
                        </p>
                        <input
                            placeholder="Usuário"
                            value={user}
                            onChange={(event) => {
                                setUser(event.target.value)
                            }}
                        />
                        <div style={{ fontSize: '12px', paddingBottom: '25px', color: 'red' }}>
                            {user.length === 0 ? 'Digite um usuário Git' : ''}
                        </div>
                        <button type="submit">
                            Login
                        </button>
                    </form>

                    <footer className="box">
                        <p>
                            Ainda não é membro? <br />
                            <a href="/login">
                                <strong>
                                    ENTRAR JÁ
                                </strong>
                            </a>
                        </p>
                    </footer>
                </section>

                <footer className="footerArea">
                    <p>
                        © 2021 alura.com.br - <a href="/">Sobre o Iakut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
                    </p>
                </footer>
            </div>
        </main>
    )
}