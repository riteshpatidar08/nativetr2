import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: ${(props) => props.theme.Size[4]};
`;
function ProfileScreen() {
  return (
    <View>
      <Title style={{ margin: 10 }}>ProfileScreen</Title>
    </View>
  );
}

export default ProfileScreen;
