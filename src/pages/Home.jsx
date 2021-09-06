import React, { useEffect, useState } from 'react';
import Input from 'components/Input';
import ConvoyTable from 'components/ConvoyTable';
import Spinner from 'components/Spinner';
import convoiesAPI from 'api/convoies';
import DetailedConvoy from 'components/DetailedConvoy';
import useFormatConvoies from 'hooks/useFormatConvoies';

const Home = () => {
  const [convoies, setConvoies] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedConvoy, setSelectedConvoy] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchConvoies = async convoiesAPI => {
      setLoading(true);
      const { data: convoies } = await convoiesAPI.getConvoies();
      setConvoies(convoies);
      setLoading(false);
    };

    fetchConvoies(convoiesAPI);
  }, []);

  const { formatConvoiesDate } = useFormatConvoies();
  const formattedConvoies = formatConvoiesDate(convoies);

  const selectConvoy = convoy => {
    setSelectedConvoy(convoy);
    setIsOpen(true);
  };

  const updateConvoyStatus = convoies => (onKey, offKey, convoy) => {
    const updatedSelectedConvoy = { ...convoy, [onKey]: true, [offKey]: false };
    setSelectedConvoy(updatedSelectedConvoy);

    const convoyToUpdated = convoies.map(conv => ({ ...conv })).find(conv => conv.id === convoy.id);
    const updatedConv = { ...convoyToUpdated, [onKey]: true, [offKey]: false };
    const updatedConvoies = convoies.map(conv => (conv.id === convoy.id ? updatedConv : conv));
    setConvoies(updatedConvoies);
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col col-6'>
          <Input input={filterText} changeInput={setFilterText} />
        </div>
      </div>
      <div className='row mt-4'>
        {loading ? (
          <Spinner />
        ) : (
          <ConvoyTable
            openConvoyDetails={selectConvoy}
            filterText={filterText}
            convoies={formattedConvoies}
          />
        )}
      </div>
      <div className='row'>
        {isOpen && (
          <DetailedConvoy
            updateConvoyStatus={updateConvoyStatus(convoies)}
            closeDetailsConvoy={() => setIsOpen(false)}
            convoy={selectedConvoy}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
