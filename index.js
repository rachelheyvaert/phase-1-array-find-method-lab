function superbowlWin(record) {
    const result = record.find(obj => obj.result === 'W');
    return (result ? result.year : undefined);
}