import React, { useState, useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text, ScrollView } from "react-native"
import AppColor from "../../theme/AppColor";
import AppIcons from "../../constants/AppIcon";
import AppStrings from "../../constants/AppString";
import ButtonComponent from "../../components/ButtonComponent";
import ProductQuantity from "../../components/ProductQuantity";
import DropdownComponent from "../../components/DropDownComponent";
import { useNavigation } from "@react-navigation/native";
import BackButtonScreenComponent from "../../components/BackButtonScreenComponent";

const ProductDetailScreen = (props) => {
    const navigation = useNavigation()
    const product = props?.route?.params?.item
    const [count, setCount] = useState(1)
    const [totalAmount, setTotalAmount] = useState()
    console.log(product)

    const productImages = product?.images || [];
    useEffect(() => {
        setTotalAmount(product?.productPrice)
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: AppColor.dark }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={{ padding: 24 }}>
                    <BackButtonScreenComponent />
                </View>
                <View style={{ padding: 24 }}>
                    <View style={styles.iconStyle}>
                        <View style={{
                            position: "absolute",
                        }}>
                            <TouchableOpacity>
                                <AppIcons.icHeart />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View>
            </View>
            {/* <View style={{
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Image source={product?.productImage} />
            </View> */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{
                    flexDirection: 'row', justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 24
                }}>
                    {productImages.map((imageUri, index) => (
                        <Image
                            key={index}
                            source={{ uri: imageUri }}
                            style={{ width: 100, height: 200, marginRight: 16 }}
                        // You can adjust the style according to your requirement
                        />
                    ))}
                </View>
            </ScrollView>
            <View style={{ paddingTop: 15 }}>
                <Text style={[styles.textStyle]}>{product?.brand}</Text>
                <View style={{ paddingTop: 15 }}>
                    <Text style={[styles.textStyle,
                    { color: AppColor.primary }]}> ${product?.price}</Text>
                </View>
            </View>
            <ScrollView>


                <View style={{ paddingHorizontal: 24 }}>
                    {/* <DropdownComponent
            
                        value={product?.productSize[0]?.id}
                        items={product?.productSize?.map(e => {
                            return {
                                label: e?.title,
                                value: e?.id
                            }
                        })}
                        onChange={(val) => {
                            console.log(val)
                        }}
                    /> */}
                </View>
                <View style={{ paddingTop: 12, paddingHorizontal: 5 }}>
                    <ProductQuantity
                        text={"Quantity"}
                        addIcon={AppIcons.icAdd}
                        count={count}
                        minusIcon={AppIcons.icMinus}
                        handleSubtract={(val) => {
                            if (val > 1) {
                                const newCount = val - 1;
                                setCount(newCount)
                                setTotalAmount(x => x - product?.price)
                            }

                        }}
                        handleAdd={(val) => {
                            setCount(val + 1)
                            setTotalAmount(product?.price * val)
                        }}
                    />
                </View>
                <View style={{ paddingTop: 26 }}>
                    <Text style={[styles.textStyle, {
                        fontSize: 12,
                        paddingHorizontal: 24,
                        fontFamily: 'Roboto-Light',


                    }]}>{product?.description}</Text>
                </View>
                <View style={{ paddingTop: 24 }}>
                    <Text style={[styles.textStyle]}>{AppStrings.shippingReturns}</Text>
                    <Text style={[styles.textStyle, {

                        fontSize: 12,
                        paddingTop: 12,
                        fontFamily: 'Roboto-Light',


                    }]}>
                        Free standard shipping and free 60-day returns
                    </Text>
                </View>

                <View style={{ paddingVertical: 10 }}>
                    <Text style={[styles.textStyle, {
                        fontSize: 20,

                    }]}>Review</Text>
                </View>
                <View>
                    <Text style={[styles.textStyle, {
                        fontSize: 24,
                        fontWeight: "700",

                    }]}>{product.rating}</Text>
                </View>

                <View style={{ paddingTop: 80 }}>
                    <ButtonComponent
                        text={`${totalAmount}`}
                        style={styles.buttonStyle}
                        btnLabelStyle={styles.btnText}
                        addBag={"Add to Bag"}
                        onPress={() => {
                            alert(`Thank you for shopping with us you\n Your total amount is $${totalAmount}`)
                        }}
                    />
                </View>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    iconStyle: {
        borderRadius: 100,
        width: 40,
        height: 40,
        backgroundColor: AppColor.lightDark,
        position: "relative",
        justifyContent: 'center',
        alignItems: "center",

    },
    sizeBox: {
        flexDirection: 'row',
        backgroundColor: AppColor.lightDark,
        width: 342,
        borderRadius: 100,
        left: 20,
        height: 56,
        alignItems: 'center'
    },
    buttonStyle: {
        width: 324,
        height: 50,
        backgroundColor: AppColor.primary,

    },
    btnText: {
        paddingHorizontal: 22
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Roboto-Bold',
        color: AppColor.white,
        paddingHorizontal: 24,
    },

})
export default ProductDetailScreen; 
