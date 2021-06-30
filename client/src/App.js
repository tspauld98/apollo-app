import { useQuery, gql } from "@apollo/client";

const APP_QUERY = gql`
  query App {
    message
    authors {
      id
      fullName
      phoneNumber
    }
    books {
      id
      title
      category
      author {
        fullName
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(APP_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
        {data.message}

        <ul>
          {data.authors.map(a => <li key={a.id}> {a.fullName} - {a.phoneNumber} </li>)}
        </ul>

        <ul>
          {data.books.map(b => <li key={b.id}> {b.title} ({b.category}) - {b.author.fullName} </li>)}
        </ul>
    </div>
  );
}

export default App;
