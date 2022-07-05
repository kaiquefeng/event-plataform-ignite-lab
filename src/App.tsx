import { gql } from "@apollo/client";
import { Event } from "./pages/Event";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`;

function App() {
  return <Event />;
}

export default App;
