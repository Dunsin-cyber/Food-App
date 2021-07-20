import * as React from 'react';
import {Text, StyleSheet, SafeAreaView,View, Image, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import categoriesData from '../assets/data/categoriesData'
import popularData from '../assets/data/popularData'
import colors from '../assets/colors/colors'







Feather.loadFont();
MaterialCommunityIcons .loadFont();

function Home({ navigation }) {
    const renderCategoryItem = ({item}) => {
        return (
            <View style= {[styles.categoryItemWrapper, { 
                backgroundColor: item.selected ? colors.primary : colors.white,
                marginLeft: item.id == 1 ?  20 : 0,
            }]}>
                <Image source = {item.image} style={styles.categoryItemImage}/>
                <Text style= {styles.categoryItemTitle}>{item.title}</Text>
                <View style= {[styles.categorySelectWrapper, {
                    backgroundColor: item.selected ? colors.white : colors.secondary,
                }]}>
                    <Feather name="chevron-right"
                     size={8} 
                     style= {styles.categorySelectIcon}
                     color={item.selected ? colors.black : colors.white}/>
                </View>
            </View>
        )
    } 
    return ( 
        <View style={styles.container}>
            <ScrollView 
            contentInsetAdjustmentBehavior= 'automatic' 
           showsVerticalScrollIndicator = {false} >
            {/*Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source= {require('../assets/images/profile.png')}
                    style={styles.profileImage}
                    />
                    <View  style={styles.appNameContainer}>
                        <Text style={styles.appName}>name of the App</Text>
                    </View>
                    <Feather name='menu' size={24} color={colors.textDark} />
                </View>
            </SafeAreaView>

            {/*Titles */}
            
            <View style={styles.titleWrapper}>
                <Text style={styles.titlewelcome}>Welcome</Text>
                <Text style={styles.titleName}>Jeff Bezos</Text>
            </View>
            
            {/*Categories */}
            
            <View style={styles.categoriesWrapper}>
                <Text style= {styles.categoriesTitle}>Categories</Text>
                <View style= {styles.categoriesListWrapper}>
                    <FlatList
                    data={categoriesData}
                    renderItem={renderCategoryItem}
                    keyExtractor={(item) => item.id}
                    horizontal={true}/>
                </View>
            </View>

            {/*Popular */}
            <View style= {styles.popularWrapper}>
                <Text style={styles.popularTitle}>Popular</Text>
                    {popularData.map((item) => ( 
                    <TouchableOpacity
                     key= {item.id} 
                     onPress={() => navigation.navigate('Details', {
                      item : item,
                      })} >
                    <View
                     style={[styles.popularCardWrapper, 
                    {
                        marginTop: item.id ==1 ? 10 : 20,
                    }]}>
                      <View>
                          <View>
                              <View style={styles.popularTopWrapper}>
                                    <MaterialCommunityIcons
                                     name='crown' 
                                    size={12}
                                    color={colors.primary} 
                                    />
                                    <Text style={styles.popularTopText}>Top of the Week</Text>
                              </View>
                              <View style={styles.popularTitleWrapper}> 
                                <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                <Text style={styles.popularTitlesWeight}>
                                Weight {item.weight}
                                </Text>
                              </View>
                          </View>
                          <View style = {styles.popularCardButtom}>
                              <View  style = {styles.addPizzaButton}> 
                              <Feather name='plus' size= {10} color={colors.textDark} />
                              </View> 
                                <View style={styles.ratingWrapper}>
                                    <MaterialCommunityIcons name='star' size={10} color={colors.textDark}  />
                                    <Text style= {styles.rating}>{item.rating}</Text>
                                </View>
                          </View>
                      </View>
                       <View style= {styles.popularCardRight}> 
                           <Image source= {item.image} style= {styles.popularCardImage}/>
                       </View>
                    </View>
                    </TouchableOpacity>
                    ))}
            </View>
            </ScrollView>
        </View>  
      );
};

const styles = StyleSheet.create({
container: {
    flex:1,
},
headerWrapper: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: 20,
    paddingTop:20,
    alignItems: 'center'

},
profileImage: {
    width:40,
    height:40,
    borderRadius: 40,
},
appNameContainer:{
    
}, 

appName: {

    fontFamily:'Montserrat-Bold',
    fontSize:20

},

titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,

},
titleWelcome: {
    fontFamily:'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
},

titleName: {
    fontFamily:'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop:2
},
categoriesWrapper: {
    marginTop: 30,

},

categoriesTitle: {
    fontFamily:'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,

},

categoriesListWrapper: {
    paddingTop:  15,
    paddingBottom: 20,

},
categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
    width:0,
    height:2,
},
    shadowOpacity: 0.05,
    shadowRadius:10,
    elevation:2,

},
categoryItemImage: {
    width:60,
    height: 60,
    marginTop: 40,
    alignSelf: 'center',
    marginHorizontal: 20

},
categoryItemTitle :{
    textAlign:'center',
    fontFamily: 'Montserrat-Medium',
    fontSize:14,
    marginTop: 10,

},
categorySelectWrapper: {
    alignSelf:'center',
    justifyContent:'center',
    marginTop: 20,
    height:26,
    width:26,
    borderRadius:26,
    marginBottom:20

},
categorySelectIcon: {
    alignSelf:'center',
    
},
popularWrapper :{
    paddingHorizontal: 20,
},
popularTitle: {
    fontFamily:'Montserrat-Bold',
    fontSize:26,
},
popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius:25,
    paddingTop:20,
    paddingLeft:20,
    flexDirection:'row',
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
        width:0,
        height:2,
    },
    shadowOpacity: 0.05,
    shadowRadius:10,
    elevation:2,

},

popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
},
popularTopText : {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize:14,
},
popularTitleWrapper: {
    marginTop: 20,
},
popularTitlesTitle :{
    fontFamily:'Montserrat-SemiBold',
    fontSize:14,
    color: colors.textDark

},
popularTitlesWeight: {
    fontFamily:'Montserrat-Medium',
    fontSize:12,
    color: colors.textLight,
    marginTop:5

},
popularCardButtom:{
  flexDirection: 'row',  
  alignItems: 'center',
  marginTop: 10,
  marginLeft: -20
},

addPizzaButton : {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical:20,
    borderTopEndRadius:25,
    borderBottomLeftRadius:25


},
ratingWrapper : {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:20,


},
ratng : {
    fontFamily:'montserrat-SemiBold',
    fontSize: 12,
    color: colors.textDark,
    marginLeft:5
},
popularCardRight: {
    marginLeft: 40

},
popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
},

})


export default Home