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
    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        let levels = this.props.levels;
        return(
            <View style={this.state.isCollapsed ? styles.headStyle : styles.headStyleExpanded}>
                { this.state.isCollapsed && 
                    <Text 
                        style={styles.headText} 
                    />
                }
                { !this.state.isCollapsed ?   
                    <View style={{flex:1, flexDirection: 'column'}}>
                        {levels.map((item, index) =>
                            <Text key={index} style={styles.subSectionText}>
                                { item }
                            </Text>
                        )}
                        <Text style={styles.headText} onPress={this.toggleCollapse}> 
                            ESR
                        </Text>
                    </View>
                :
                    <Text 
                        style={styles.headText}
                        onPress={this.toggleCollapse}> ESR 
                    </Text>
                }
                { this.state.isCollapsed &&
                    <Text 
                        style={styles.loginButtonText}
                        onPress={this.toggleUser}> {display} 
                    </Text>
                }
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
        color: '#ffffff',
        fontSize: 20,
        flex: 1,
    },
    subSectionText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 15,
        flex: 1,
    },
    headStyleExpanded: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: '#003366',
        flex: 4,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000'
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: '#003366',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000'
    },
    buttonStyles: {
        backgroundColor: 'lightgrey',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});