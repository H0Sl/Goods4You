import PageRouter from 'components/PageRouter';
import 'style/main.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToAnchor from 'components/ScrollToHashElement';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToAnchor />
                <PageRouter />
            </BrowserRouter>
        </div>
    );
};

export default App;
