import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            isLoggedIn: false,
            isCollapsed: true
        };
    }
    toggleUser = () => {
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn };
        });
    }
    toggleCollapse = () => {
        if(this.props.levels.length > 0){
            this.setState(previousState => {
                return { isCollapsed: !previousState.isCollapsed };
            });
        }
    }
    shouldDisplayLogin = () => {
        return this.props.levels.length == 0;
    }
    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        let levels = this.props.levels;
        let highLevelText = this.props.levels.length == 0 ? 'ESR' : this.props.levels[0].title;
        return(
            <View style={this.state.isCollapsed ? styles.headStyle : [styles.headStyle,{flex:levels.length + 1}]}>
                {/* { this.state.isCollapsed && 
                    <Text 
                        style={styles.headText} 
                    />
                } */}
                { !this.state.isCollapsed ?   
                    <View style={{flex:1, flexDirection: 'column'}}>
                        {levels.map((item, index) =>
                            <Text 
                                key={index} 
                                onPress={this.toggleCollapse}
                                style={styles.subSectionText}>
                                { item.title}
                            </Text>
                        )}
                        {/* <Text style={styles.headText} > 
                            ESR
                        </Text> */}
                    </View>
                :
                    <Text 
                        style={styles.headText}
                        onPress={this.toggleCollapse}> {highLevelText} 
                    </Text>
                }
                {/* { this.shouldDisplayLogin &&
                    <Text 
                        style={styles.loginButtonText}
                        onPress={this.toggleUser}> {display} 
                    </Text>
                } */}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    loginButtonText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 14,
        flex: 1,
    },
    headText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        flex: 1,
    },
    subSectionText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 15,
        flex: 1,
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: '#1e90ff',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: 'grey'
    },
    buttonStyles: {
        backgroundColor: '#1e90ff',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});