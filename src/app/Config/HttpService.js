import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default function (url, calllbackFn) {
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            calllbackFn(data);
        }).catch((error) => {
            console.error(error);
        })
}