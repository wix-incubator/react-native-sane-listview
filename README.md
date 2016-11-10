# Sane ListView
Why do we need all this datasource nonsense?!

## Usage

Just like any other react-native ListView, except the datasource is passed as props (rowsById and rowsIdArray):

```
<SaneListView
  rowsById={{id1: rowA, id2: rowB}}
  rowsIdArray={['id1', 'id2']}
  renderRow={this.renderRow}
/>
```
