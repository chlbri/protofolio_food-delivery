import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';
import mealImage from '../../assets/images/detailsMeal.png';
import Avatar from '../components/Avatar';
import Hearts from '../components/Hearts';
import Arrow from '../components/svg/Arrow';
import useNavigation from '../hooks/useNavigation';

const ingredients = [
  {
    label: 'Feuilles de Basilic',
    comments: 'Ajouter du goût',
    id: '0',
    color: '#456042',
  },
  {
    label: 'Feuilles de Basilic',
    comments: 'Ajouter du goût',
    id: '1',
    color: '#456042',
  },
  {
    label: 'Feuilles de Basilic',
    comments: 'Ajouter du goût',
    id: '2',
    color: '#456042',
  },
  {
    label: 'Feuilles de Basilic',
    comments: 'Ajouter du goût',
    id: '3',
    color: '#456042',
  },
  {
    label: 'Feuilles de Basilic',
    comments: 'Ajouter du goût',
    id: '4',
    color: '#456042',
  },
  {
    label: 'Feuilles de Basilic',
    comments: 'Ajouter du goût',
    id: '5',
    color: '#456042',
  },
];

const DetailsScreen: FC = () => {
  const tailwind = useTailwind();
  const { goBack } = useNavigation();
  return (
    <View style={tailwind('bg-native_blue flex-1')}>
      <StatusBar translucent style="light" />
      <ScrollView>
        <View style={[tailwind('flex flex-col pb-[120px]')]}>
          <ImageBackground
            source={mealImage}
            style={tailwind('w-full pt-[62px] min-h-[510px]')}
            resizeMode="cover"
            blurRadius={2}
          >
            <View style={[tailwind('px-[30px]')]}>
              <Pressable onPress={goBack}>
                <Arrow />
              </Pressable>
              <Hearts marginTop={240} />
              <Text style={[tailwind('text-h1 text-white')]}>
                Sticky Mixed Rice
              </Text>
              <Text style={[tailwind('text-title text-white mt-[3px]')]}>
                Main
              </Text>
              <Text style={[tailwind('text-base text-white mt-[21px]')]}>
                Rice dish in which sticky glutinous rice is mixed with all
                kinds of vegetables with sweet pomegranate or meat and
                steamed
              </Text>
            </View>
          </ImageBackground>
          <View style={[tailwind('px-[30px] pt-[25px]')]}>
            <View style={tailwind('flex flex-row')}>
              <Avatar />
              <View style={tailwind('ml-[11px]')}>
                <Text style={tailwind('text-base text-white')}>
                  Jack Olive
                </Text>
                <Text style={tailwind('text-xs text-bgray mt-[3px]')}>
                  Caviar Head Sous Chef
                </Text>
              </View>
            </View>
            <View style={tailwind('mt-[13px]')}>
              <Text style={tailwind('text-accent text-title')}>
                Ingrédients
              </Text>
              <View style={tailwind('mt-[17px]')}>
                {ingredients.map(ingredient => (
                  <Ingredient key={ingredient.id} {...ingredient} />
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={tailwind('absolute z-30 bottom-[50px] w-full')}>
        <TouchableOpacity
          style={tailwind(
            ' shadow-card_xl bg-accent w-5/6 h-[60px] mx-auto rounded-full',
          )}
        >
          <Text style={tailwind('m-auto text-title text-white')}>
            ADD TO CART FOR $9
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;
type IngredientProps = {
  label: string;
  comments: string;
  color: string;
};

const Ingredient: FC<IngredientProps> = ({ label, comments, color }) => {
  const tailwind = useTailwind();
  return (
    <View
      style={tailwind(
        'flex flex-row justify-between items-center my-[10px]',
      )}
    >
      <View>
        <Text style={tailwind('text-base text-white')}>{label}</Text>
        <Text style={tailwind('text-sm text-bgray')}>{comments}</Text>
      </View>
      <View
        style={[
          tailwind('w-[26px] h-[26px] rounded-full'),
          { backgroundColor: color },
        ]}
      />
    </View>
  );
};
