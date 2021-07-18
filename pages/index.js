import React from 'react';

import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";

import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

function ProfileSidebar(name) {
  return (
    <Box>
      <img src={`https://github.com/${name.user}.png`} style={{ borderRadius: '8px'}}/>
      
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

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: '1',
    title: 'Eu Odeio Acordar Cedo',
    image: 'https://img10.orkut.br.com/community/52cc4290facd7fa700b897d8a1dc80aa.jpg'
  },{
    id: '2',
    title: 'Eu Odeio Maça Farinhenta',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg'
  },{
    id: '3',
    title: 'Deus Me Disse: Desce e Arrasa!',
    image: 'https://img10.orkut.br.com/community/9c191076aed7ecbf709924dc74ecefac.jpeg'
  },{
    id: '4',
    title: 'Cabo USB',
    image: 'data:image/jpeg;base64,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'
  },{
    id: '5',
    title: '●๋•Ƭѳρઽ ૯ √Iρઽ●๋•',
    image: 'https://i.pinimg.com/originals/84/af/1e/84af1e44c86d2d645a5925c1f5ce16d0.gif'
  }]);

  const user = 'amandaperrone';

  //const pessoasFavoritas = ['peas', 'omariosouto'];
  const pessoasFavoritas =[{
    name: 'Dridri',
    image: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.6435-9/118392874_3150194295072255_3972421631057870592_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HlQqZknIyPQAX_AAANY&_nc_ht=scontent.fcgh22-1.fna&oh=ce9db56b3fe80ad0303772b93ae218c8&oe=60F877A1'
  },{
    name: 'Fer',
    image: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.6435-9/137062785_4939264436144639_4108992993235481655_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=a1a48OBj5HYAX_5tYTQ&_nc_ht=scontent.fcgh22-1.fna&oh=416715de0352467d3c05a68206e8df44&oe=60F9AED8'
  },{
    name: 'Ju',
    image: 'https://pbs.twimg.com/profile_images/1397001800004378624/5cGRIPNY_400x400.jpg'
  },{
    name: 'Caião',
    image: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.6435-9/200687109_4082786225138324_5114708646111961171_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=B-rPkHwIN_kAX_HMHzq&tn=_O1HHuj6i9FrDCmN&_nc_ht=scontent.fcgh22-1.fna&oh=b41d2794e84cf35e24fd14dec57bff6c&oe=60F8C779'
  },{
    name: 'Alex',
    image: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.18169-9/15873350_1354837924579738_4599507957649189887_n.jpg?_nc_cat=110&_nc_rgb565=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=sOzoBS5j5UoAX9MSOMq&_nc_ht=scontent.fcgh22-1.fna&oh=286b799f29ebb32edf92da35868ee1cc&oe=60F9D587'
  },{
    name: 'Boliviano',
    image: 'https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.6435-9/53314555_1921277027980666_6396249057378959360_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CvnQFsN8fwgAX9GYEJe&_nc_ht=scontent.fcgh22-1.fna&oh=23f07ac7d20fc1d4c886980fb47c378b&oe=60F9F003'
  }]
  //const comunidades =['Eu Odeio Acordar Cedo'];

  return (
    <>
      <AlurakutMenu githubUser={user}/>

      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar user={user}/>
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>   
            
            <OrkutNostalgicIconSet />
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
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Mais que migos, friends ({pessoasFavoritas.length})</h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <>
                  <li key={itemAtual.name}>
                    <a>
                      {/* <img src={`https://github.com/${itemAtual}.png`}/>
                      <span>{itemAtual}</span> */}
                      <img src={itemAtual.image}/>
                      <span>{itemAtual.name}</span>
                    </a>

                  </li>
                  </>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>

            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <>
                  <li key={itemAtual.id}>
                    <a>
                      <img src={itemAtual.image}/>
                      <span>{itemAtual.title}</span>
                    </a>

                  </li>
                  </>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
    )
}
