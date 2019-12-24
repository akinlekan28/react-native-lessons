import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREASE_COUNTER":
      return {
        ...state,
        counter: state.counter - 1
      };

    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() =>
          dispatch({
            type: "INCREASE_COUNTER",
            payload: counter + 1
          })
        }
      />
      <Button
        title="Decrease"
        onPress={() =>
          dispatch({
            type: "DECREASE_COUNTER",
            payload: counter - 1
          })
        }
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
