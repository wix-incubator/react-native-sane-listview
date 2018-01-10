![alt text](https://faceswaponline.com/wp-content/uploads/2017/04/missionaccomplished-6c17ad8ad9409d21748f9168c4e74e90.jpg)
# Deprecated, use FlatList instead.

# Sane ListView
Why do we need all this datasource nonsense?!

## Usage

Just like any other react-native ListView, except the datasource is passed as props (rowsById and rowsIdArray):

```jsx
<SaneListView
  rowsById={{id1: rowA, id2: rowB}}
  rowsIdArray={['id1', 'id2']}
  renderRow={this.renderRow}
/>
```

**A simple example:**

```js
import SaneListView from 'react-native-sane-listview';
```

and then in your class

```jsx
constructor(props) {
	super(props);
	this.state = {
		data: [{name:'Dan'},{name:'Lisa'}]
	};	
	
	reload = () => {
		this.setState({'data':[{name:'John'}]});
	};
		
	setTimeout(reload, 3000);
}
render() {
	return (
		<SaneListView style={{top:20}}
			rowsById={this.state.data}
			renderRow={(rowData) => <Text>{rowData.name}</Text>}
		/>
	);
}
```
