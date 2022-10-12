import OrderPage from "./pages/OrderPage";
import DataState from "./context/DataState";
function App() {
  return (
    <DataState>
      <OrderPage />
    </DataState>
  );
}


export default App;
