import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image61 from '../utils/image61.png'
import './Styles/trade.css'
import Vector from '../utils/Vector.png'
import image69 from '../utils/image69.png'
import bitcoin from '../utils/bitcoin.png'
import matic from '../utils/matic.png'
import binance from '../utils/binance.png'
import xrp from '../utils/xrp.png'
import solana from '../utils/solana.png'
import Navbar from './Navbar';
import { Box, Image, Input, useDisclosure } from '@chakra-ui/react'
 
import {InputGroup,Checkbox, CheckboxGroup,
  InputLeftElement,
  InputRightAddon,
  Button,Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Search2Icon } from "@chakra-ui/icons";

const TokenList = () => {
  const [tokens, setTokens] = useState([]);
  const[price,setPrice]=useState(0.06504200);
  const[amount,setAmount]=useState(0);
  const[quantity,setQuantity]=useState(0.00);
  const [currentPrice,setCurrentPrice]=useState(0)
  const[coin,setCoin]=useState("ETHBTC");
  const[widthModal,setWidthModal]=useState('28%');
   
     

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    setInterval(()=>{
        axios.get('https://api.binance.com/api/v3/ticker/price')
        .then(response => {
          console.log(response.data)
          const data = response.data.filter(item => ['BTCUSDT', 'ETHUSDT', 'MATICUSDT', 'BNBUSDT', 'XRPUSDT', 'SOLUSDT'].includes(item.symbol));
          setTokens(response.data);
        });     
    },1000)
   
  }, []);
  return (
    <div className='trade-Main'> 
    <Navbar/>
    <div className="token-list">
        <div className='midlogo-box'>
            <img src={image69} alt="" />
        </div>
      <div className="amount-list">
        <p >current value</p>
         <div className='currentAmount'>
            <img className='rupeelogo' src={Vector} alt="rupee logo" />
            <p className='current'>{currentPrice}</p>
         </div>
      </div>
      <div className="token-dropdown">
       <img className='token-logo' src={image61} alt="" />
        <select  className="token-dropdown1" onSelect={onOpen}   onChange={(e)=>{
          onOpen()
            setWidthModal('90%')
            let pp=tokens.filter((ele)=>{
                if(ele.symbol==e.target.value){
                    setPrice(Number(ele.price));
                    setCoin(ele.symbol);
                    return ele.price
                }
            })
            setQuantity((Number(amount)/(Number(price)*80)))  
        }
        }>

    <Modal className='modal' isOpen={isOpen} onClose={onClose}>
          
          <ModalContent  marginTop='15%' w='28%'   marginLeft='36.5%' backgroundColor='#1C1731'    className='token-list-modal'>
             
            <ModalCloseButton color='white' />
             <ModalHeader >
             <InputGroup borderRadius={5} size="sm">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input type="text" w='300px'   margin='auto' placeholder="Search..." border="1px solid #949494" className='searchbox' onChange={(e)=>{

              
        }}/>
        <InputRightAddon
          p={0}
          border="none"
        >
           
        </InputRightAddon>
      </InputGroup>
               </ModalHeader>
            <ModalFooter   h='70%' columnGap='50px' display='grid' classname='modalfooter'>
              <Box display='flex' backgroundColor='transparent' justifyContent='space-between' w='260px' fontFamily='Poppins' margin='auto'>
              <Box display='flex' gap='5px'><Image src={image61}/>
              <Text color='white'>Ethereum</Text> </Box>
              <Checkbox defaultChecked > </Checkbox>
               </Box>
               <Box display='flex' backgroundColor='transparent' justifyContent='space-between'  w='260px' fontFamily='Poppins' margin='auto'>
              <Box display='flex' gap='5px'><Image src={bitcoin}/>
              <Text color='white'>Bitcoin</Text> </Box>
              <Checkbox ></Checkbox>
               </Box> <Box display='flex' backgroundColor='transparent' justifyContent='space-between'  w='260px' fontFamily='Poppins' margin='auto'>
              <Box display='flex' gap='5px'><Image src={matic}/>
              <Text color='white'>Matic</Text> </Box>
              <Checkbox > </Checkbox>
               </Box> <Box display='flex' backgroundColor='transparent' justifyContent='space-between'  w='260px' fontFamily='Poppins' margin='auto'>
              <Box display='flex' gap='5px'><Image src={binance}/>
              <Text color='white'>Binance</Text> </Box>
              <Checkbox > </Checkbox>
               </Box> <Box display='flex' backgroundColor='transparent' justifyContent='space-between'  w='260px' fontFamily='Poppins' margin='auto'>
              <Box display='flex' gap='5px'><Image src={xrp}/>
              <Text color='white'>XRP</Text> </Box>
              <Checkbox > </Checkbox>
               </Box> <Box display='flex' backgroundColor='transparent' justifyContent='space-between'  w='260px' fontFamily='Poppins' margin='auto'>
              <Box display='flex' gap='5px'><Image src={solana}/>
              <Text color='white'>Solana</Text> </Box>
              <Checkbox > </Checkbox>
               </Box>
            </ModalFooter>
          </ModalContent>
        </Modal>

          {tokens.map((token) => {
           return <option value={token.symbol}>{token.symbol}</option>
          })}
        </select>
      </div>
      <div className='inside-div'>
      <p className='input-heading1'>Amount you want to invest</p>
       <Text w='30px'className='inrlogo'>INR</Text>
        <input   className='token-amount' type="text" placeholder="Enter INR amount" onChange={(e)=>{
            
                setAmount(Number(e.target.value));
            console.log(typeof(amount))
            setQuantity((Number(amount)/(Number(price)*80)))
           
        }} />
        </div>
        <div className='inside-div'>
        <p className='input-heading2'>Estimate Number of {coin} You will Get</p>
        <input   className='token-amount' type="text" placeholder="Estimate token amount" value={quantity} disabled />
       
        </div>
        <button className='trade-btn' onClick={(e)=>{
            e.preventDefault();
         setCurrentPrice(currentPrice+amount)
        }}>Buy</button>
        
    </div>
    </div>
  );
};

export default TokenList;
