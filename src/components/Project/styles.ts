import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}

.project {
  padding: 2rem 1.8rem;
  background-color: #2b2b2b;
  border-radius: 1.2rem;
  transition: 0.25s;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #FFF;
  box-sizing: border-box;
}

.project:hover {
  transform: translateY(-5px);
  background-color: var(--pink);
}

.project header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--blue);
  margin-bottom: 2rem;
}

.project .project-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.project header a > img {
  width: 2.5rem;
}

.project h3 {
  margin-bottom: 1.5rem;
}

.project p {
  letter-spacing: 0.12rem;
  margin-bottom: 2rem;
}

.project p a {
  color: #FFF;
  border-bottom: 1px solid var(--green);
  transition: color 0.25s;
}

.project p a:hover {
  color: var(--green);
}

.project footer {
  margin-top: auto;
}

.project .tech-list {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  opacity: 0.7;
  flex-wrap: wrap;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .projects {
    padding: 1rem;
    gap: 1.5rem;
  }
}

@media (max-width: 740px) {
  .projects {
    padding: 1rem;
    gap: 1.2rem;
  }
}









  // .projects{
  //   display: grid;
  //   grid-template-columns: repeat(3, 1fr);
  //   grid-template-rows: auto;
  //   gap: 2rem;
  //   padding: 1rem;
  //   overflow: hidden;

  //   .project{
  //     padding: 2rem 1.8rem;
  //     background-color: #2b2b2b;
  //     border-radius: 1.2rem;
  //     transition: 0.25s;
  //     display: flex;
  //     flex-direction: column;
  //     height: 100%;
  //     color: #FFF;
  //     &:hover{
  //       transform: translateY(-5px);
  //       background-color: var(--pink);
  //     }

  //     header{
  //       display: flex;
  //       align-items: center;
  //       justify-content: space-between;
  //       color: var(--blue);
  //       margin-bottom: 3.6rem;
  //       .project-links{
  //         display: flex;
  //         align-items: center;
  //         gap: 1rem;
  //       }
  //       a > img {
  //         width: 5.0rem;
  //       }
  //     }
      
  //     h3{
  //       margin-bottom: 2rem;
  //     }

  //     p{
  //       letter-spacing: 0.12rem;
  //       margin-bottom: 2rem;
  //       a{
  //         color: #FFFF;
  //         border-bottom: 1px solid var(--green);
  //         transition: color 0.25s;
  //         &:hover{
  //           color: var(--green);
  //         }
  //       }
  //     }

  //     footer{
  //       margin-top: auto;
  //       .tech-list{
  //         display: flex;
  //         align-items: center;
  //         gap: 2rem;
  //         font-size: 1.4rem;
  //         opacity: 0.6;
  //       }
  //     }

  //   }
  // }

  // @media (max-width: 960px){
  //   .projects{
  //     grid-template-columns: 1fr 1fr;
  //   }
  // }

  // @media (max-width: 740px){
  //   .projects{
  //     grid-template-columns: 1fr;
  //   }
  // }
`