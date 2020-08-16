import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderMarketPlace3 from '../components/shared/headers/HeaderMarketPlace3';
import MartketPlace3Banner from '../components/partials/homepage/marketplace3/MartketPlace3Banner';
import MarketPlace3SearchTrending from '../components/partials/homepage/marketplace3/MarketPlace3SearchTrending';
import MarketPlace3DealOfDay from '../components/partials/homepage/marketplace3/MarketPlace3DealOfDay';
import MarketPlace3ProductBox from '../components/partials/homepage/marketplace3/MarketPlace3ProductBox';
import FooterMarketPlace2 from '../components/shared/footers/FooterMarketPlace2';
// import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
// import HomeBanner from '../components/partials/homepage/home-default/HomeBanner';
// import SiteFeatures from '../components/partials/homepage/home-default/SiteFeatures';
// import HomeAdsColumns from '../components/partials/homepage/home-default/HomeAdsColumns';
// import ConumerElectronics from '../components/partials/homepage/home-default/ConumerElectronics';
// import Clothings from '../components/partials/homepage/home-default/Clothings';
// import GardenAndKitchen from '../components/partials/homepage/home-default/GardenAndKitchen';
// import HomeAds from '../components/partials/homepage/home-default/HomeAds';
// import DownLoadApp from '../components/partials/commons/DownLoadApp';
// import NewArrivals from '../components/partials/homepage/home-default/NewArrivals';
// import Newletters from '../components/partials/commons/Newletters';
// import HomeDefaultDealOfDay from '../components/partials/homepage/home-default/HomeDefaultDealOfDay';
// import HomeDefaultTopCategories from '../components/partials/homepage/home-default/HomeDefaultTopCategories';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import SubscribePopup from '../components/shared/SubscribePopup';
import '../scss/home-default.scss';
import { getCollections, getCategories } from '../store/collection/action';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribe: false,
        };
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        const { query } = this.props;
        if (query) {
            const collectionsSlug = ['deal_of_the_day'];
            const categoriesSlug = [
                'clothing-and-parel',
                'consumer-electrics',
                'computers-and-technologies',
                'garden-and-kitchen',
                'health-and-beauty',
            ];
            this.props.dispatch(getCollections(collectionsSlug));
            this.props.dispatch(getCategories(categoriesSlug));
        }
        setTimeout(() => {
            this.setState({ subscribe: false });
        }, 10000);
    }

    render() {
        const { subscribe } = this.state;
        return (
            <div className="site-content">
                <HeaderMarketPlace3 />
                <HeaderMobile />
                <NavigationList />
                <SubscribePopup active={subscribe} />
                <main id="homepage-5">
                    <MartketPlace3Banner />
                    <MarketPlace3SearchTrending />
                    <MarketPlace3DealOfDay collectionSlug="deal_of_the_day" />
                    <MarketPlace3ProductBox />
                </main>
                <FooterMarketPlace2 />
                {/* <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <SubscribePopup active={subscribe} />
                <main id="homepage-1">
                    <HomeBanner />
                    <SiteFeatures />
                    <HomeDefaultDealOfDay collectionSlug="deal_of_the_day" />
                    <HomeAdsColumns />
                    <HomeDefaultTopCategories />
                    <ConumerElectronics collectionSlug="consumer_electronics" />
                    <Clothings collectionSlug="clothings" />
                    <GardenAndKitchen collectionSlug="garden_and_kitchen" />
                    <HomeAds />
                    <DownLoadApp />
                    <NewArrivals collectionSlug="new_arrivals_products" />
                    <Newletters />
                </main>
                <FooterFullwidth /> */}
            </div>
        );
    }
}

export default connect((state) => state.collection)(Index);
