const state = () => {
  return {
    users: [
      {
        id: 1,
        name: 'John Doe',
        avatar: 'https://maunailxinh.com/wp-content/uploads/2025/05/avatar-eren-trang-den.jpg',
        age: 30,
        description: "A software developer from NY.",
        programmingLanguages: ['JavaScript', 'Python', 'C++'],
        gender: "Nam",
        type: "ADMIN"
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://maunailxinh.com/wp-content/uploads/2025/05/avatar-eren-yeager-2.jpg',
        age: 25,
        description: "Frontend engineer with a passion for UI/UX.",
        programmingLanguages: ['HTML', 'CSS', 'JavaScript'],
        gender: "Nữ",
        type: "CLIENT"
      },
      {
        id: 3,
        name: 'Michael Johnson',
        avatar: 'https://maunailxinh.com/wp-content/uploads/2025/05/avatar-eren-yeager-3.jpg',
        age: 35,
        description: "Backend developer focusing on databases and APIs.",
        programmingLanguages: ['Java', 'SQL', 'Go'],
        gender: "Nam",
        type: "CLIENT"
      },
      {
        id: 4,
        name: 'Emily Davis',
        avatar: 'https://maunailxinh.com/wp-content/uploads/2025/05/avatar-eren-yeager-5.jpg',
        age: 28,
        description: "Full-stack developer who loves open source.",
        programmingLanguages: ['Ruby', 'JavaScript', 'PHP'],
        gender: "Nữ",
        type: "CLIENT"
      },
      {
        id: 5,
        name: 'David Wilson',
        avatar: 'https://maunailxinh.com/wp-content/uploads/2025/05/avatar-eren-yeager-8.jpg',
        age: 40,
        description: "System architect with 15 years of experience.",
        programmingLanguages: ['C#', 'C++', 'Python'],
        gender: "Nam",
        type: "CLIENT"
      }
    ],
    searchName: ""
  }
}

const getters = {
  getAllUsers: (state) => state.users,
  getUserById: (state) => (id) => state.users.find(user => user.id === id),
  userSearchByName: (state) => (keyword) => {
    if (!keyword) return state.users;
    return state.users.filter(user => user.name.toLowerCase().includes(keyword.toLowerCase()));
  }
}

const mutations = {
  setSearchName(state, payload) {
    state.searchName = payload;
  },
  addNewUser(state, payload) {
    state.users.push(payload);
  }
}

const actions = {
  setSearchNameAction(context, payload) {
    context.commit('setSearchName', payload);
  },
  addNewUserAction(context, payload) {
    context.commit('addNewUser', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
