import React, {Component} from 'react';
import {Member} from './Member'
import {getFakeMembers} from '../../services/Requester'

class MemberList extends Component {
    state = {
        members: [],
        loading: true,
        error: null
    }

    render() {
        const {members, loading, error} = this.state
        
        return (
            <div className="member-list">
                {
                    (loading) ? <span>Loading members</span> :
                                (members.length) ? 
                                    members.map((user, i) => {
                                        return <Member {...user} key={i} />
                                    }) : <span>Members 0</span>
                }
                {(error) ? <p>Error loading members</p> : ''}
            </div>
        )
    }

    componentDidMount() {
        this.setState({loading: true})
        getFakeMembers().then(users => {
            this.setState({
                members: users,
                loading: false
            })
        },
            error => {
                this.setState({
                    error,
                    loading: false
                })
            }       
        )
    }
}

export default MemberList