import React from "react";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import List from "./components/List";
function App() {
  return (
    <div className="App">
        <Header header={{body: 'Обычный заголовок'}}/>
        <Paragraph paragraph={{body: 'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных'}}/>
        <List list={['Первый','Второй','Третий','Четвертый','Пятый']}/>
    </div>
  );
}

export default App;
