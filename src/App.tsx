import {
  CalendarIcon,
  DotsCircleHorizontalIcon,
  PhoneIcon,
  SearchCircleIcon
} from '@heroicons/react/outline';
import Card from 'components/Card';
import Chart from 'components/Chart';
import TinyLineChart from 'components/TinyLineChart';

const App = () => {
  const cardDetails = [
    {
      title: 'total income',
      amount: '$1200'
    },
    {
      title: 'total expense',
      amount: '8.50K'
    },
    {
      title: 'total credit',
      amount: '$250'
    },
    {
      title: 'total bonus',
      amount: '8.10K'
    }
  ];

  const profileButtons = ['calendar', 'find', 'call', 'more'];

  const getProfileIcon = (keyword: string) => {
    switch (keyword) {
      case 'calendar':
        return <CalendarIcon className="w-6 h-6" />;
      case 'find':
        return <SearchCircleIcon className="w-6 h-6" />;
      case 'call':
        return <PhoneIcon className="w-6 h-6" />;
      case 'more':
        return <DotsCircleHorizontalIcon className="w-6 h-6" />;
    }
  };

  const renderCard = () => {
    return cardDetails.map((card, index) => {
      return (
        <div key={index}>
          <Card title={card.title} amount={card.amount} />
        </div>
      );
    });
  };

  const renderProfileButtons = () => {
    return profileButtons.map((button, index) => {
      return (
        <div key={index} className="flex items-center flex-row md:flex-col">
          <div className="border-2 border-transparent p-4 rounded-full bg-gray-100 text-center mr-2 md:mr-4">
            {getProfileIcon(button)}
          </div>
        </div>
      );
    });
  };

  const activityDetails = [
    {
      name: 'Alexis Tufina',
      role: 'Backend developer 🎉',
      time: '12:45',
      profilePhoto:
        'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
    },
    {
      name: 'Josef Draf',
      role: 'Business developer',
      time: '13:45',
      profilePhoto:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
      name: 'Camel Dilees',
      role: 'Frontend developer 🔥',
      time: '10:45',
      profilePhoto:
        'https://images.unsplash.com/photo-1508473161895-5dabcc2f59cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
      name: 'Bronte Aida',
      role: 'Product Manager',
      time: '21:45',
      profilePhoto:
        'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80'
    }
  ];

  const renderActivityDetails = () => {
    return activityDetails.map((activity, index) => {
      return (
        <div className="flex mb-5 justify-between" key={index}>
          <div className="flex items-center">
            <img
              src={activity.profilePhoto}
              alt={activity.name}
              className="w-20 rounded-full"
            />
            <div className="flex flex-col ml-4">
              <p className="font-medium"> {activity.name} </p>
              <p className="text-gray-500 tracking-wide"> {activity.role} </p>
            </div>
          </div>
          <p className="font-bold"> {activity.time} </p>
        </div>
      );
    });
  };

  return (
    <div className="m-4 grid font-sans">
      <div className="m-4">
        <div className="p-8 border-b-2 border-gray-200 pl-0">
          <h1 className="font-bold text-4xl"> Dashboard </h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="basis-3/5 mr-0 md:mr-8">
            <div className="pt-8 grid lg:grid-cols-4 gap-4">{renderCard()}</div>
            <div className="pt-8">
              <div className="border-2 border-gray-200 p-8 rounded-xl flex flex-row">
                <TinyLineChart />
              </div>
            </div>
            <div className="pt-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-gray-200 p-8 rounded-xl flex flex-row">
                  <Card title="total product" amount={1285} removeBorder />
                  <Chart />
                </div>
                <div className="border-2 border-gray-200 p-8 rounded-xl flex flex-row">
                  <Card title="total earning" amount={'$2685'} removeBorder />
                  <Chart />
                </div>
              </div>
            </div>
          </div>
          <div className="basis-2/5 pt-8 mr-4">
            <div className="border-2 border-gray-200 p-8 rounded-xl flex flex-col">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="rounded-full w-32 mb-4"
                  alt="Avatar"
                />
                <h4 className="font-semibold text-2xl"> Tasha Adler </h4>
                <div className="flex mt-4">{renderProfileButtons()}</div>
              </div>
              <div className="pt-8">
                <h1 className="font-bold"> Recent Activities </h1>
                <p className="text-gray-500"> 20 Jan 2022 </p>
                <div className="pt-8">{renderActivityDetails()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
