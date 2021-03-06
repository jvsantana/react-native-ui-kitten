import {
  StyleSheet,
} from 'react-native';
import {
  RkConfig
} from "react-native-ui-kitten"

export const UtilStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'System'
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: 'white',
    shadowColor: RkConfig.colors.grey300,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  rowContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  spaceAround: {
    marginHorizontal: 5
  },
  spaceH: {
    marginHorizontal: 5
  },
  spaceV: {
    marginVertical: 5
  },
  description: {
    paddingRight: 10,
    paddingLeft: 20,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flex:1
  },
  exampleView:{

  },
  codeText: {
    color: RkConfig.colors.orange700,
    backgroundColor: RkConfig.colors.grey300,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
    marginHorizontal: 2,
  },
  tab: {
    marginLeft: 25,
  },
  row :{
    flexDirection: 'row'
  },
  column :{
    flexDirection: 'column'
  },
  tabContent:{
    fontSize: 32,
    alignSelf: 'center',
    padding: 30,
    color: RkConfig.colors.grey500
  }
});
