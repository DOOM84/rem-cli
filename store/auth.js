export const state = () => ({

});

export const mutations = {

};


export const actions = {

  async contact({}, data){
    try {
      return await this.$axios.$post('contact', data);
    }catch (error) {
      throw error;
    }

  },

};

export const getters = {

};

