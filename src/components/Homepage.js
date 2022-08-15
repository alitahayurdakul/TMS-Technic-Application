import React, { useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import RNPickerSelect from "react-native-picker-select";


const HomePage = ({ navigation }) => {

    const [language, setLanguage] = useState("TR");

    let guestWeb = [];
    let employeeWeb = [];

    //TR PART
    if (language === 'TR') {
        guestWeb = [{
            id: 1,
            name: "TMS Teknik",
            webName: "https://tmstechnic.com/",
        },
        {
            id: 2,
            name: "TMS Motor",
            webName: "https://tmsmotor.com.tr/",
        },
        {
            id: 3,
            name: "TMS Rubber",
            webName: "https://tmsrubber.com/tr/",
        },
        {
            id: 4,
            name: "TMS Ar-Ge",
            webName: "https://www.tmsarge.com/"
        },
        {
            id: 5,
            name: "TMS Yönlendirici",
            webName: "https://www.sites.tmstechnic.com"
        }
        ]

        employeeWeb = [{
            id: 6,
            name: "TMS Portal",
            webName: "http://portal.tmstechnic.com/"
        },
        {
            id: 7,
            name: "TMS ETCS Portal",
            webName: "https://lokomotif.tmstechnic.com/"
        },
        {
            id: 8,
            name: "TMS Onboard",
            webName: "https://onboard.tmstechnic.com/"
        },
        {
            id: 9,
            name: "TMS Karabük Lokomotif Portal",
            webName: "https://karabuk-loko.tmstechnic.com/"
        },
        {
            id: 10,
            name: "TMS Edirne Lokomotif Portal",
            webName: "https://edirne-loko.tmstechnic.com/"
        }
        ]
    }

    //ENG PART
    else {
        guestWeb = [{
            id: 1,
            name: "TMS Technic",
            webName: "https://tmstechnic.com/en",
        },
        {
            id: 2,
            name: "TMS Motor",
            webName: "https://tmsmotor.com.tr/en/",
        },
        {
            id: 3,
            name: "TMS Rubber",
            webName: "https://tmsrubber.com/",
        },
        {
            id: 4,
            name: "TMS R&D",
            webName: "https://www.tmsarge.com/eng"
        },
        {
            id: 5,
            name: "TMS Router",
            webName: "https://www.sites.tmstechnic.com/en"
        }
        ]

        employeeWeb = [{
            id: 6,
            name: "TMS Portal",
            webName: "http://portal.tmstechnic.com/"
        },
        {
            id: 7,
            name: "TMS ETCS Locomotive Portal",
            webName: "https://lokomotif.tmstechnic.com/"
        },
        {
            id: 8,
            name: "TMS Onboard",
            webName: "https://onboard.tmstechnic.com/"
        },
        {
            id: 9,
            name: "TMS Karabük Locomotive Portal",
            webName: "https://karabuk-loko.tmstechnic.com/"
        },
        {
            id: 10,
            name: "TMS Edirne Locomotive Portal",
            webName: "https://edirne-loko.tmstechnic.com/"
        }
        ]
    }

    return <View style={styles.container}>
        <Text h5 style={{ color: "white", marginBottom: 10 }}>
            {language === 'TR' ? "Dil Seçiniz" : "Select Language"}
        </Text>

        <RNPickerSelect style={
            {
                inputIOS: {
                    fontSize: 16,
                    paddingVertical: 10,
                    paddingHorizontal: 12,
                    borderWidth: 1,
                    borderColor: '#ec7424',
                    borderRadius: 8,
                    color: 'white',
                    paddingRight: 30,
                },

                inputAndroid: {
                    fontSize: 16,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    borderWidth: 1,
                    borderColor: '#ec7424',
                    borderRadius: 8,
                    color: 'white',
                    paddingRight: 30,
                },
                iconContainer: {
                    top: 15,
                    paddingRight: 16,
                },
            }
        }
            useNativeAndroidPickerStyle={false}
            doneText={language === 'TR' ? "Tamam" : "Done"}
            onValueChange={(value) => setLanguage(value)}
            placeholder={{}}
            items={[
                { label: "TR", value: "TR" },
                { label: "ENG", value: "ENG" },
            ]}
            Icon={() => {
                return <Icon
                    name="ellipsis-h"
                    type="font-awesome"
                    underlayColor="white"
                    iconStyle={styles.editIcon}
                />
            }
            }
        />

        <Text h4 style={styles.headline} >{language === "TR" ? "Misafir" : "Guest"} </Text>
        <FlatList
            data={guestWeb}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () => {
                            Linking.openURL(item.webName);
                        }
                    }
                >
                    <Text style={{ color: "white", textAlign: "center" }}>{item.name}</Text>
                </TouchableOpacity>
            }
        />

        <Text h4 style={styles.headline}>{language === "TR" ? "Şirket" : "Company"}</Text>
        <FlatList
            data={employeeWeb}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () => {
                            Linking.openURL(item.webName);
                        }
                    }
                >
                    <Text style={{ color: "white", textAlign: "center" }}>{item.name}</Text>
                </TouchableOpacity>
            }
        />
        {
            language === "TR" ? <Text style={styles.privacy} h5>Eğer güvenlik politikasını görmek istiyorsanız lütfen <Text style={styles.link} onPress={() => {
                navigation.navigate('Privacy');
            }} h5>
                tıklayın.
            </Text>
            </Text> :
                <Text style={styles.privacy} h5>If you want to see privacy policy about your location, please <Text style={styles.link} onPress={() => {
                    navigation.navigate('Privacy');
                }} h5>
                    click.
                </Text>
                </Text>
        }


    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#002c57",
    },

    headline: {
        textAlign: "center",
        marginVertical: 10,
        color: "white"
    },
    button: {
        margin: 8,
        backgroundColor: "#ec7424",
        padding: 10,
        borderRadius: 6
    },

    editIcon: {
        color: '#ec7424',
        fontSize: 16
    },

    privacy: {
        color: "#ffd",
        marginTop: 10
    },

    link: {
        color: "white",
        textDecorationLine: "underline",
    }
})

export default HomePage;



