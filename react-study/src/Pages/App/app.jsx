import React from "react";

// 子组件
export function IndexPage({person}){
    return (
        <>
            <h1>
                niaho
            </h1>
            <p>{person.name}</p>
        </>
    )
}

// 父组件
export default function Profile() {
    return (
      <IndexPage
        person={{ 
            name: 'Katsuko Saruhashi', 
        }}
      />
    );
  }