import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";

import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

function ProfileSidebar(name) {
  return (
    <Box>
      <img src={`https://github.com/${name.user}.png`} style={{ borderRadius: '8px'}}/>
        Amanda top
    </Box>
  );
}

export default function Home() {
  const user = 'amandaperrone';
  const pessoasFavoritas = ['peas', 'omariosouto'];

  return (
    <>
      <AlurakutMenu />

      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar user={user}/>
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>   
            
            <OrkutNostalgicIconSet />
          </Box>

        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Mais que migos, friends ({pessoasFavoritas.length})</h2>

            <ul>

            {pessoasFavoritas.map((itemAtual) => {
              return (
                <>
                 <li>
                  <a>
                    <img src={`https://github.com/${itemAtual}.png`}/>
                    <span>{itemAtual}</span>
                  </a>

                 </li>
                </>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <Box>
          <h2 className="smallTitle">Comunidades</h2>
          </Box>
        </div>
      </MainGrid>
    </>
    )
}
