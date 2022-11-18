const initState = {
    list: [
        { id: 1, name: 'Cây cam ngọt của tôi', price: 80000, number: 1, img: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250882226_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D' },
        { id: 2, name: 'Đêm trước bình minh', price: 120000, number: 2, img: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250882226_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D' },
        { id: 3, name: 'Trăm năm cô đơn', price: 120000, number: 2, img: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250882226_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D' },
        { id: 4, name: 'Biên niên cô đơn', price: 120000, number: 2, img: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250882226_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D' },
        { id: 5, name: 'Ba ngàn năm trước, đóa sen nở trong đêm thanh vắng', price: 120000, number: 2, img: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250882226_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D' },
        { id: 6, name: 'Đêm trước bình minh', price: 120000, number: 2, img: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250882226_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D' },
    ],
}
const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'cart/incrementNumber':
            let product = state.cart;
            product = product.filter(item => item.id === action.payload.id)
            product[0].number = product[0].number + 1;
            return {
                ...state, cart: [
                    ...state.cart
                ]
            }
        default:
            return state;
    }
}
export default cartReducer