import React from 'react';

import nookies from 'nookies';
import jwt from 'jsonwebtoken';

import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";

import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

function ProfileSidebar(name) {
  return (
    <Box>
      <img src={`https://github.com/${name.user}.png`} style={{ borderRadius: '8px' }} />

      <hr />
      <p>
        <a className="boxLink">
          Amanda Perrone
        </a>
      </p>

      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

function ProfileRelationBox(props) {
  return (
    <>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">{props.title} ({props.items.length})</h2>

        <ul>
          {props.items.map((itemAtual) => {
            return (
              <>
                <li key={itemAtual.id}>
                  <a>
                    {/* <img src={`https://github.com/${itemAtual}.png`}/>
                        <span>{itemAtual}</span> */}
                    <img src={itemAtual.imageUrl} />
                    <span>{itemAtual.title}</span>
                  </a>

                </li>
              </>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>
    </>
  )
}

export default function Home(props) {
  const [comunidades, setComunidades] = React.useState([]);

  const user = props.githubUser;

  //const pessoasFavoritas = ['peas', 'omariosouto'];
  const pessoasFavoritas = [{
    title: 'Adrieli',
    imageUrl: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.6435-9/118392874_3150194295072255_3972421631057870592_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HlQqZknIyPQAX_AAANY&_nc_ht=scontent.fcgh22-1.fna&oh=ce9db56b3fe80ad0303772b93ae218c8&oe=60F877A1'
  }, {
    title: 'Fernanda',
    imageUrl: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.6435-9/137062785_4939264436144639_4108992993235481655_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=a1a48OBj5HYAX_5tYTQ&_nc_ht=scontent.fcgh22-1.fna&oh=416715de0352467d3c05a68206e8df44&oe=60F9AED8'
  }, {
    title: 'Juan',
    imageUrl: 'https://pbs.twimg.com/profile_images/1397001800004378624/5cGRIPNY_400x400.jpg'
  }, {
    title: 'Caio',
    imageUrl: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.6435-9/200687109_4082786225138324_5114708646111961171_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=B-rPkHwIN_kAX_HMHzq&tn=_O1HHuj6i9FrDCmN&_nc_ht=scontent.fcgh22-1.fna&oh=b41d2794e84cf35e24fd14dec57bff6c&oe=60F8C779'
  }, {
    title: 'Alex',
    imageUrl: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.18169-9/15873350_1354837924579738_4599507957649189887_n.jpg?_nc_cat=110&_nc_rgb565=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=sOzoBS5j5UoAX9MSOMq&_nc_ht=scontent.fcgh22-1.fna&oh=286b799f29ebb32edf92da35868ee1cc&oe=60F9D587'
  }, {
    title: 'Carlos',
    imageUrl: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.6435-9/53314555_1921277027980666_6396249057378959360_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CvnQFsN8fwgAX9GYEJe&_nc_ht=scontent.fcgh22-1.fna&oh=23f07ac7d20fc1d4c886980fb47c378b&oe=60F9F003'
  }]
  //const comunidades =['Eu Odeio Acordar Cedo'];

  const [sorte, setSorte] = React.useState([]);

  React.useEffect(() => {
    // sorte do dia
    fetch('https://allugofrases.herokuapp.com/frases/random').then((resposta) => {
      return resposta.json();
    }).then((respostaCompleta) => {
      setSorte(respostaCompleta);
    })

    // comunidades DatoCMS
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': `89af76b20e55e4efe9eec5b9f21824`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
        body: JSON.stringify({
        query: `{
          allCommunities {
            id
            title
            imageUrl
            creatorSlug
          }
        
          _allCommunitiesMeta {
            count
          }
        }` 
      }),
    })
    .then(res => res.json())
    .then((res) => {
      const comunidadesDato = res.data.allCommunities;

      setComunidades(comunidadesDato);

      console.log(res.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  console.log(sorte)

  return (
    <>
      <AlurakutMenu githubUser={user} />

      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar user={user} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a), Amanda</h1>

            <OrkutNostalgicIconSet />
            <hr />
            <br />
            <span style={{ fontSize: '12px' }}><b>Sorte do dia:</b> {sorte.frase}</span>
          </Box>

          <Box>
            <h2 className="subTitle">O que deseja fazer?</h2>

            <form onSubmit={function handleCreateCommunity(e) {
              e.preventDefault();
              const dadosForm = new FormData(e.target);

              //console.log('Nome: ', dadosForm.get('title'))
              //console.log('Imagem: ', dadosForm.get('image'))

              //comunidades.push('Eu Odeio Ma???? Farinhenta')
              const comunidade = {
                title: dadosForm.get('title'),
                imageUrl: dadosForm.get('image'),
                creatorSlug: user,
              }

              fetch('/api/comunidades', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(comunidade)
              })
              .then(async (response) => {
                const dados = await response.json();

                const comunidade = dados.newRecord;

                const comunidadesAtualizadas = [...comunidades, comunidade]
                
                setComunidades(comunidadesAtualizadas)
              })

            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>

              <div>
                <input
                  placeholder="Coloque uma url para a capa"
                  name="image"
                  aria-label="Coloque uma url para a capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>

          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationBox title="Mais que amigos, friends" items={pessoasFavoritas} />

          <ProfileRelationBox title="Comunidades" items={comunidades} />

        </div>
      </MainGrid>
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;
  
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
      Authorization: token
    }
  })
  .then((resposta) => resposta.json())
  
  console.log('ok?', isAuthenticated)
  
  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
  
  const { githubUser } = jwt.decode(token);
  
  console.log('Token decodificado', githubUser)
  return {
    props: {
      githubUser: githubUser
    },
  }
}