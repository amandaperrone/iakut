import React from 'react';

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
                <li key={itemAtual.title}>
                  <a>
                    {/* <img src={`https://github.com/${itemAtual}.png`}/>
                        <span>{itemAtual}</span> */}
                    <img src={itemAtual.image} />
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

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    title: 'Eu Odeio Acordar Cedo',
    image: 'https://img10.orkut.br.com/community/52cc4290facd7fa700b897d8a1dc80aa.jpg'
  }, {
    title: 'Eu Odeio Maça Farinhenta',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg'
  }, {
    title: '●๋•Ƭѳρઽ ૯ √Iρઽ●๋•',
    image: 'https://i.pinimg.com/originals/84/af/1e/84af1e44c86d2d645a5925c1f5ce16d0.gif'
  }]);

  const user = 'amandaperrone';

  //const pessoasFavoritas = ['peas', 'omariosouto'];
  const pessoasFavoritas = [{
    title: 'Adrieli',
    image: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.6435-9/118392874_3150194295072255_3972421631057870592_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HlQqZknIyPQAX_AAANY&_nc_ht=scontent.fcgh22-1.fna&oh=ce9db56b3fe80ad0303772b93ae218c8&oe=60F877A1'
  }, {
    title: 'Fernanda',
    image: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.6435-9/137062785_4939264436144639_4108992993235481655_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=a1a48OBj5HYAX_5tYTQ&_nc_ht=scontent.fcgh22-1.fna&oh=416715de0352467d3c05a68206e8df44&oe=60F9AED8'
  }, {
    title: 'Juan',
    image: 'https://pbs.twimg.com/profile_images/1397001800004378624/5cGRIPNY_400x400.jpg'
  }, {
    title: 'Caio',
    image: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.6435-9/200687109_4082786225138324_5114708646111961171_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=B-rPkHwIN_kAX_HMHzq&tn=_O1HHuj6i9FrDCmN&_nc_ht=scontent.fcgh22-1.fna&oh=b41d2794e84cf35e24fd14dec57bff6c&oe=60F8C779'
  }, {
    title: 'Alex',
    image: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.18169-9/15873350_1354837924579738_4599507957649189887_n.jpg?_nc_cat=110&_nc_rgb565=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=sOzoBS5j5UoAX9MSOMq&_nc_ht=scontent.fcgh22-1.fna&oh=286b799f29ebb32edf92da35868ee1cc&oe=60F9D587'
  }, {
    title: 'Carlos',
    image: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.6435-9/53314555_1921277027980666_6396249057378959360_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CvnQFsN8fwgAX9GYEJe&_nc_ht=scontent.fcgh22-1.fna&oh=23f07ac7d20fc1d4c886980fb47c378b&oe=60F9F003'
  }]
  //const comunidades =['Eu Odeio Acordar Cedo'];

  const [sorte, setSorte] = React.useState([]);

  React.useEffect(() => {
    fetch('https://allugofrases.herokuapp.com/frases/random').then( (resposta) => {
      return resposta.json();
    }).then ( (respostaCompleta) => {
      setSorte(respostaCompleta);
    })
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

              //comunidades.push('Eu Odeio Maçã Farinhenta')
              const comunidade = {
                id: new Date().toString(),
                title: dadosForm.get('title'),
                image: dadosForm.get('image'),
              }
              const comunidadesAtualizadas = [...comunidades, comunidade]
              setComunidades(comunidadesAtualizadas)
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
          
          <ProfileRelationBox title="Comunidades" items={comunidades}/>
          
        </div>
      </MainGrid>
    </>
  )
}
